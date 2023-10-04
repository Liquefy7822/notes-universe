// components/Profile.js
import React, { useState } from 'react';

const Profile = () => {
  // Sample initial profile data
  const initialProfileData = {
    profilePicture: 'https://example.com/default-profile.jpg',
    bio: 'This is my bio.',
    socialLinks: {
      twitter: 'https://twitter.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourname',
      github: 'https://github.com/yourusername',
    },
  };

  // State to manage profile data
  const [profileData, setProfileData] = useState(initialProfileData);

  // Function to handle profile data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle social link changes
  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      socialLinks: {
        ...prevData.socialLinks,
        [name]: value,
      },
    }));
  };

  // Function to save profile changes (this can be connected to your backend)
  const saveProfile = () => {
    // TODO: Implement logic to save profile changes
    console.log('Profile changes saved:', profileData);
  };

  return (
    <div>
      <h1>Edit Your Profile</h1>
      <div>
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input
          type="text"
          id="profilePicture"
          name="profilePicture"
          value={profileData.profilePicture}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={profileData.bio}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="twitter">Twitter:</label>
        <input
          type="text"
          id="twitter"
          name="twitter"
          value={profileData.socialLinks.twitter}
          onChange={handleSocialLinkChange}
        />
      </div>
      <div>
        <label htmlFor="linkedin">LinkedIn:</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={profileData.socialLinks.linkedin}
          onChange={handleSocialLinkChange}
        />
      </div>
      <div>
        <label htmlFor="github">GitHub:</label>
        <input
          type="text"
          id="github"
          name="github"
          value={profileData.socialLinks.github}
          onChange={handleSocialLinkChange}
        />
      </div>
      <button onClick={saveProfile}>Save</button>
    </div>
  );
};

export default Profile;
