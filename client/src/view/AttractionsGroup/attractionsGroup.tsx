import React from "react";
import { useParams } from "react-router-dom";

import {
  PageHeader,
  PageContainer,
  Header,
  AttractionTile,
} from "../../components/common/common";

function AttractionsGroup() {
  const { name } = useParams();

  return (
    <div>
      <Header name={name} small />
      <main>
        <PageHeader
          header={name}
          description={`5 najciekawszych miejsc w ${name}`}
        />
        <PageContainer flex>
          {[
            "Atrakcja 1",
            "Atrakcja 2",
            "Atrakcja 3",
            "Atrakcja 4",
            "Atrakcja 5",
          ].map((attraction: string, index: number) => (
            <AttractionTile name={attraction} index={index} key={index} />
          ))}
        </PageContainer>
      </main>
    </div>
  );
}

export default AttractionsGroup;
