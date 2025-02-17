import React from 'react';

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
  return (
    <div className="movie-card bg-dark-100 p-5 rounded-2xl shadow-inner shadow-light-100/10 relative overflow-hidden group">
      <div className="image relative overflow-hidden">
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
          alt={title}
          className="rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-[1.08]"
        />
        <div className="image-box absolute top-0 left-[-85%] z-1 w-1/2 h-full bg-gradient-to-r from-transparent to-white opacity-80 skew-x-[-25deg] group-hover:left-[125%] transition-all duration-1000"></div>
      </div>

      <div className="mt-4">
        <h3 className="text-white font-bold text-base line-clamp-1">{title}</h3>
        <div className="content mt-2 flex flex-row items-center flex-wrap gap-2">
          <div className="rating flex flex-row items-center gap-1">
            <img src="star.svg" alt="Star Icon" className="w-4 h-4 object-contain" />
            <p className="font-bold text-base text-white">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <span className="text-sm text-gray-100">•</span>
          <p className="lang capitalize text-gray-100 font-medium text-base">{original_language}</p>
          <span className="text-sm text-gray-100">•</span>
          <p className="year text-gray-100 font-medium text-base">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
