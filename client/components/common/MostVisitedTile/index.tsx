import React from "react";
import { useRouter } from "next/router";
import {
  StyledTile,
  StyledThumbnail,
  StyledName,
  StyledDescription,
} from "./StyledMostVisitedTile";

interface Props {
  img: string;
  name: string;
  description: string;
  url?: string;
}

export default function MostVisitedTile({
  img,
  name,
  description,
  url,
}: Props) {
  const router = useRouter();

  const redirect = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <StyledTile onClick={redirect}>
      <StyledThumbnail src={img} />
      <div>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </div>
    </StyledTile>
  );
}
