import React from "react";
import { List } from "semantic-ui-react";

const linkuri = [
  {
    uri: "https://www.instagram.com/TheSouledStore/",
    name: "Instagram",
    value: "instagram",
  },
  {
    uri: "https://www.youtube.com/channel/UC1LkdB8GTrMEwFF_yzqytoA",
    name: "Youtube",
    value: "youtube",
  },
  {
    uri: "https://twitter.com/TheSouledStore",
    name: "Twitter",
    value: "twitter",
  },
  {
    uri: "https://www.facebook.com/SouledStore",
    name: "Facebook",
    value: "facebook",
  },
];

export default function Linkcomponent({ value }) {
  return (
    <>
      {linkuri.map((i) => {
        return (
          <List.Item>
            <List.Icon className={`${i.value}`} />
            <List.Content>
              <a href={i.uri}>
                <small>{i.name}</small>
              </a>
            </List.Content>
          </List.Item>
        );
      })}
    </>
  );
}
