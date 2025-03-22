import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
// import { FirebaseAdapter } from '@next-auth/firebase-adapter';
// import { db } from '@/lib/firebase';

// Étendre le type Session pour inclure l'ID
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}

/**
 * Configuration de NextAuth pour l'authentification
 * À configurer avec vos propres identifiants Firebase et Google
 */
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        // Ici, vous implémenteriez la logique pour vérifier les identifiants avec Firebase
        // C'est juste un exemple, pas implémenté pour l'instant
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        // Pour l'exemple, nous acceptons n'importe quelles informations d'identification valides
        return {
          id: '1',
          email: credentials.email,
          name: 'Utilisateur Test',
        };
      }
    })
  ],
  // Quand Firebase sera correctement configuré, vous pourrez utiliser l'adaptateur Firebase
  /* adapter: FirebaseAdapter({
    db: db,
  }), */
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 