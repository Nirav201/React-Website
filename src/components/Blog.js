import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Blog() {

    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d47973e3231d4de8add4d60f2d38c17e&page=1pageSize=20`).then((result) => {
            result.json().then((res) => {
                console.log('api response >>>>', res);
                setNewsData(res.articles);
            })
        })
    }, [])
    console.warn('api response useState>>>>', newsData);

  return (
    <div className='pt-[80px] pb-[80px]'>
      <div className='layout'>
            <h2 className='text-[#151515] text-[42px] font-bold mb-[40px] block text-center'>Blog</h2>
            <div className='row'>
                {
                    newsData.map((newsList) => (
                        <div className='col-md-4 p-2' key={newsList.title}>
                            <div className="card" >
                                <img src={newsList.urlToImage?newsList.urlToImage:'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0'} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{newsList.title}</h5>
                                    <p className="card-text">{newsList.description}</p>
                                    <a href={newsList.url} className="btn btn-primary" target='_blank'>Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog
