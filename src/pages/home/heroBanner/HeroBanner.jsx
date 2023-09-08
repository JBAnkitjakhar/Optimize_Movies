// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "./style.scss";

// import useFetch from "../../../hooks/useFetch";

// import Img from "../../../components/lazyLoadImage/Img";
// import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

// const HeroBanner = () => {
//     const [background, setBackground] = useState("");
//     const [query, setQuery] = useState("");
//     const navigate = useNavigate();
//     const { url } = useSelector((state) => state.home);
//     const { data, loading } = useFetch("/movie/upcoming");

//     useEffect(() => {
//         const bg =
//             url.backdrop +
//             data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
//         setBackground(bg);
//     }, [data]);

//     const searchQueryHandler = (event) => {
//         if (event.key === "Enter" && query.length > 0) {
//             navigate(`/search/${query}`);
//         }
//     };


//     return (
//         <div className="heroBanner">
//             {!loading && (
//                 <div className="backdrop-img">
//                     <Img src={background} />
//                 </div>
//             )}

//             <div className="opacity-layer"></div>
//             <ContentWrapper>
//                 <div className="heroBannerContent">
//                     <span className="title">Welcome.</span>
//                     <span className="subTitle">
//                        Explore your Movies and watch trailers also find what's coming next!!!
//                     </span>
//                     <div className="searchInput">
//                         <input
//                             type="text"
//                             placeholder="Search for a movie or tv show...."
//                             onChange={(e) => setQuery(e.target.value)}
//                             onKeyUp={searchQueryHandler}
//                         />
//                         <button>Search</button>
//                     </div>
//                 </div>
//             </ContentWrapper>
//         </div>
//     );
// };

// export default HeroBanner;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = () => {
        if (query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Explore your Movies and watch Trailers also find what's coming <span className="next-word">NEXT</span>
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={handleInputChange}
                            value={query}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    searchQueryHandler();
                                }
                            }}
                        />
                        <button
                            onClick={searchQueryHandler}
                            disabled={query.length === 0}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
