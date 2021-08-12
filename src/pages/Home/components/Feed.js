import React from "react";

import PostCard from "../../../components/PostCard";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

const posts = [
  { id: 1, description: 'Teste 1' },
  { id: 2, description: 'Teste 2' },
];

function Feed() {
  const classes = useStyles();

  return <div>
    {
      posts.map(post => (
        <PostCard key={post.id} />
      ))
    }

  </div>;
}

export default Feed;
