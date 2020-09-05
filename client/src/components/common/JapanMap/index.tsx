import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledJapanMap } from './StyledJapanMap';
import { StyledSubHeader } from '../';

interface Props {
  regions?: any;
}

function JapanMap({ regions }: Props) {
  const history = useHistory();

  useEffect(() => {
    const regionsFromSvg = document.querySelectorAll('.japanMap__region');

    Array.from(regionsFromSvg).map((item) => {
      item.addEventListener('click', (e: any) => {
        const name = e.target.parentElement.parentElement
          .getAttribute('id')
          .toLowerCase();
        const region = regions.find(
          (item: any) => item.key.toLowerCase() === name,
        );
        if (region) {
          history.push(`/podroze${region.url}`);
        }
      });
    });
  }, []);

  return (
    <>
      <StyledSubHeader center>Mapa Japonii</StyledSubHeader>
      <StyledJapanMap />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  regions: state.regions,
});

export default connect(mapStateToProps, null)(JapanMap);
