import React from "react";

import {
  PageHeader,
  HomeContainer,
  PlaceTile,
} from "../../components/common/common";

function Home() {
  return (
    <main>
      <PageHeader
        header="Ruszaj w drogę"
        description="Czytasz jeden z nielicznych przewodników po Japonii. Pokażemy ci gdzie pojechać i co warto zobaczyć w tym fascynujcym kraju."
      />
      <HomeContainer>
        <PlaceTile name="place1" />
        <PlaceTile name="place2" />
        <PlaceTile name="place3" />
        <PlaceTile name="place4" />
        <PlaceTile name="place5" />
        <PlaceTile name="place6" />
        <PlaceTile name="place7" />
      </HomeContainer>
    </main>
  );
}

export default Home;
