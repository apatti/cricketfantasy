/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import PlayerCard from "./PlayerCard";
import { getOverrideProps } from "./utils";
import { Collection } from "@aws-amplify/ui-react";
export default function PlayerCardCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search for player"
      itemsPerPage={6}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "PlayerCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <PlayerCard
          margin="5px 5px 5px 5px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PlayerCard>
      )}
    </Collection>
  );
}
