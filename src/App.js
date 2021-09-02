import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
// import transactions from './data/transactions.json';

import SocialProfile from './components/SocialProfile/SocialProfile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

export default function App() {
  return (
    <div>
      {
        <SocialProfile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          likes={user.stats.likes}
          views={user.stats.views}
        />
      }

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
}
