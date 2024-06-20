import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const News = ({ filter }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 8;  // Set the number of posts per page

    const fetchData = async (page = 1) => {
        setLoading(true);
        const url = filter && filter !== 'All'
            ? `https://newsapi.org/v2/everything?q=${filter}&page=${page}&pageSize=${pageSize}&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f`
            : `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${pageSize}&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f`;

        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
        setNews(data.articles);
        setTotalPages(Math.ceil(data.totalResults / pageSize));  // Calculate total pages based on total results
        setLoading(false);
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [filter, currentPage]);

    return (
        <>
            <div className="grid sm:grid-cols-2 gap-4 p-4 m-5">
                {news.map((ele, index) => (
                    <div key={index} className="max-w-xl rounded overflow-hidden shadow-lg">
                        <img
                            src={ele.urlToImage == null ? "https://as2.ftcdn.net/v2/jpg/03/03/32/29/1000_F_303322995_UcqCOYQW1ukNfkpMW0nGIvxiiHhFGe0b.jpg" : ele.urlToImage}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-red-400">{ele.title}</div>
                            <p className="text-gray-200 text-base">
                                {ele.description}
                            </p>
                            <a href={ele.url} target="_blank" rel="noopener noreferrer" className="text-white font-bold">
                                Read More
                            </a>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ele.source.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <div>Loading...</div>}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    );
};

export default News;
