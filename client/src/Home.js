import React, { useEffect } from "react";
import { fetchThreads } from "./api/index";
import { setThreads } from "./redux/threadsSlice";
import { useDispatch, useSelector } from "react-redux";
import ThreadList from "./components/ThreadList";
import VerticalToggleButtons from "./components/ViewType";

function Home() {
  const dispatch = useDispatch();
  const [view, setView] = React.useState("list");

  const listOfThreads = useSelector((state) => state.threadsData.listOfThreads);

  useEffect(() => {
    fetchThreads().then((response) => dispatch(setThreads(response.data)));
  }, [dispatch]);

  return (
    <React.Fragment>
      <VerticalToggleButtons view={view} setView={setView} />
      {listOfThreads ? (
        <ThreadList threads={listOfThreads.threads} mode={view} />
      ) : (
        <h1>Loading...</h1>
      )}
    </React.Fragment>
  );
}

export default Home;
