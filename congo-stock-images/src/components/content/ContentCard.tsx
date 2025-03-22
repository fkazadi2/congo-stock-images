"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiEye, FiHeart, FiDownload } from 'react-icons/fi';
import { Content } from '@/models/content';

interface ContentCardProps {
  content: Content;
  showStats?: boolean;
}

export default function ContentCard({ content, showStats = true }: ContentCardProps) {
  const { id, type, title, thumbnailUrl, price, stats } = content;

  // Adapter l'URL en fonction du type de contenu
  const contentUrl = `/content/${id}`;

  // Formater le prix en CDF / USD
  const formattedPrice = new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    maximumFractionDigits: 0,
  }).format(price);

  // Badge pour le type de contenu
  const getTypeBadge = () => {
    switch (type) {
      case 'photo':
        return <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Photo</span>;
      case 'illustration':
        return <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">Illustration</span>;
      case 'video':
        return <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Vidéo</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <Link href={contentUrl} className="block relative">
        {getTypeBadge()}
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={thumbnailUrl} 
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={contentUrl}>
          <h3 className="font-semibold text-secondary dark:text-text-light hover:text-primary truncate">{title}</h3>
        </Link>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-primary font-medium">{formattedPrice}</span>
          
          {showStats && (
            <div className="flex space-x-2 text-gray-500 dark:text-gray-400 text-sm">
              <span className="flex items-center">
                <FiEye className="mr-1" size={14} />
                {stats.views}
              </span>
              <span className="flex items-center">
                <FiHeart className="mr-1" size={14} />
                {stats.likes}
              </span>
              <span className="flex items-center">
                <FiDownload className="mr-1" size={14} />
                {stats.downloads}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 