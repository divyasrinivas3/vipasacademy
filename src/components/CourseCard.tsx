import React from 'react';
import { Star, Clock, PlayCircle } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  lessons: number;
  duration: string;
  href?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  category,
  price,
  rating,
  image,
  lessons,
  duration,
  href = '#'
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-gray-300 absolute" />
          <div className="overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  const handleViewCourse = () => {
    if (href && href !== '#') {
      window.location.href = href;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Price Badge */}
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            ${price}
          </span>
        </div>

        {/* Course Image */}
        <div className="h-48 bg-gray-100 flex items-center justify-center p-6">
          <img 
            src={image} 
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop`;
            }}
          />
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Category and Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-gray-700">{rating}</span>
            <div className="flex items-center gap-0.5">
              {renderStars(rating)}
            </div>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* View Course Button */}
        <button 
          onClick={handleViewCourse}
          className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 mb-4"
        >
          View Course
        </button>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <span>{lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-red-500" />
            <span>{duration}</span>
          </div>
        </div>
       
      </div>
       
    </div>
    
    
  );
};

export default CourseCard;