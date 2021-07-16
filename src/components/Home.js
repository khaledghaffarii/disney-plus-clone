import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch} from "react-redux";
function Home() {
    const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      
      // console.log(snapshot);
      let tempMovies = snapshot.docs.map((doc)=>{
        //console.log(doc.data());
        return { id: doc.id, ...doc.data() }
      })
      console.log(tempMovies)
    });
  }, []);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />  
    </Container>
  );
}

export default Home;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
