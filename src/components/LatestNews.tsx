import React from "react";
import NewsCard from "./NewsCard";

function LatestNews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <NewsCard title="Warm Meals and Warmer Hearts: Community Dinner for Orphans and Widows This Sunday" image="/images/pexels-planeteelevene-2505397.jpg"  />
      <NewsCard title="Path to Hope: Free Health Check-Up and Counseling Day for the Unhoused and Recovering Addicts" image="/images/pexels-darkshadephotos-32796982.jpg" />
      <NewsCard title="Care and Comfort Drive: Distributing Blankets and Essentials to Elders and Disabled Residents" image="/images/pexels-darkshadephotos-32801607.jpg" />
      <NewsCard title="Warm Meals and Warmer Hearts: Community Dinner for Orphans and Widows This Sunday" image="/images/pexels-planeteelevene-2505397.jpg"  />
      <NewsCard title="Path to Hope: Free Health Check-Up and Counseling Day for the Unhoused and Recovering Addicts" image="/images/pexels-darkshadephotos-32796982.jpg" />
      <NewsCard title="Care and Comfort Drive: Distributing Blankets and Essentials to Elders and Disabled Residents" image="/images/pexels-darkshadephotos-32801607.jpg" />
    </div>
  );
}

export default LatestNews;
