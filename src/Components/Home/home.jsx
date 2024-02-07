
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [pollOptions, setPollOptions] = useState(['DMK', 'BJP', 'TVK', 'ADMK']);
  const [votes, setVotes] = useState(new Array(pollOptions.length).fill(0));
  const [showNotification, setShowNotification] = useState(false); // State for showing notification

  const handleVote = (index) => {
    // Reset all votes to zero
    const resetVotes = new Array(pollOptions.length).fill(0);
    // Set the selected option's vote to 1
    resetVotes[index] = 1;
    setVotes(resetVotes);
    setShowNotification(true); // Show notification
  };

  return (
    <div className="live-polling-container">
      <h2>Live Polling</h2>
      <div className="poll-options">
        {pollOptions.map((option, index) => (
          <div key={index} className="poll-option">
            <span>{option}</span>
            <button onClick={() => handleVote(index)}>Vote</button>
            <span>Votes: {votes[index]}</span>
          </div>
        ))}
      </div>
      {showNotification && (
        <div className="notification">
          <p>Your vote has been submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Home;*/

/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [pollOptions, setPollOptions] = useState(['DMK', 'BJP', 'TVK', 'ADMK']);
  const [votes, setVotes] = useState(new Array(pollOptions.length).fill(0));
  const [votedIndex, setVotedIndex] = useState(null); // State to store the voted index
  const [showNotification, setShowNotification] = useState(false); // State for showing notification

  const handleVote = (index) => {
    // Check if the user has already voted
    if (votedIndex !== null) {
      alert("You've already voted!");
      return;
    }

    // Update the votes
    const updatedVotes = [...votes];
    updatedVotes[index]++;

    // Set the voted index and update votes
    setVotedIndex(index);
    setVotes(updatedVotes);
    setShowNotification(true); // Show notification
  };

  // Function to find the index of the option with maximum votes
  const getWinningOption = () => {
    let maxVotes = 0;
    let winningIndex = 0;
    votes.forEach((vote, index) => {
      if (vote > maxVotes) {
        maxVotes = vote;
        winningIndex = index;
      }
    });
    return pollOptions[winningIndex];
  };

  return (
    <div className="live-polling-container">
      <h2>Live Polling</h2>
      <div className="poll-options">
        {pollOptions.map((option, index) => (
          <div key={index} className="poll-option">
            <span>{option}</span>
            <button disabled={votedIndex !== null} onClick={() => handleVote(index)}>Vote</button>
            <span>Votes: {votes[index]}</span>
          </div>
        ))}
      </div>
      {showNotification && (
        <div className="notification">
          <p>Your vote has been submitted successfully!</p>
        </div>
      )}
      {votedIndex !== null && (
        <div className="winner-notification">
          <p>Leading is: {getWinningOption()}</p>
        </div>
      )}
    </div>
  );
};

export default Home;*/
import React, { useState } from 'react';

const Home = () => {
  // Initial state for options and their respective votes
  const [options, setOptions] = useState([
    { id: 1, text: 'DMK ', votes: 0 },
    { id: 2, text: 'BJP   ', votes: 0 },
    { id: 3, text: 'TVK', votes: 0 },
    { id: 4, text: 'ADMK', votes: 0 },
    // Add more options as needed
  ]);

  // Function to handle voting for an option
  const handleVote = (optionId) => {
    setOptions(options.map(option => {
      if (option.id === optionId) {
        return { ...option, votes: option.votes + 1 };
      } else {
        return option;
      }
    }));
  };

  // Find the option with the most votes
  const winner = options.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);

  return (
    <div>
      <h1>Live Polling App</h1>
      <h2>Vote for your favorite Party:</h2>
      <ul>
        {options.map(option => (
          <li key={option.id}>
            <button onClick={() => handleVote(option.id)}>{option.text}</button>
            <span>Votes: {option.votes}</span>
          </li>
        ))}
      </ul>
      <h2>Winner: {winner.text}</h2>
    </div>
  );
};

export default Home;

