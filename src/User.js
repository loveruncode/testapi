import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './navbar';

function User() {
  const [imageUrl, setImageUrl] = useState('');
  const [query, setQuery] = useState('');
  const [usersFound, setUsersFound] = useState(false); // New state variable
  const apiKey = "RFvqSllTpbnsBF1gtCvOzbmReTxCVpeb-qElphUIS38";

  useEffect(() => {
    fetchData();
  }, );

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/users?query=${query}&client_id=${apiKey}`
      );
      const jsonData = await response.json();

      if (jsonData.total > 0) {
        setUsersFound(true); 
        const randomUser = jsonData.results[Math.floor(Math.random() * jsonData.results.length)];
        setImageUrl(randomUser.profile_image.large); 
        console.log('Random User:', randomUser);
      } else {
        setUsersFound(false); 
        console.log('No user found with the name:', query);
        setImageUrl(''); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUsersFound(false); 
      setImageUrl(''); 
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
    <div className='app'>
      <h1>Hình Người Dùng Ngẫu Nhiên</h1>
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Nhập name của bạn..."
        />
        <button className='btn' onClick={handleButtonClick}>Tìm kiếm</button>
      </div>
      {imageUrl && <img className='hinhnguoidung' src={imageUrl} alt="User" />}
      {!usersFound && <p>Không tìm thấy người dùng nào với tên {query}.</p>}
    </div>
    </>
  );
}

export default User;

