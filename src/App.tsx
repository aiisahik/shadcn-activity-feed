import ActivityFeed from "./components/ui/activity-feed";

function App() {
  return (
    <div className="max-w-xl mx-auto my-12 rounded-lg border border-gray-200 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Demo for Actiity Feed!</h1>
      <p>You can use this component to display a feed or timeline of events.</p>

      <ActivityFeed />
    </div>
  );
}

export default App;
