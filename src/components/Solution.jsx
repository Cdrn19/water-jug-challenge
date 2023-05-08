import React from "react";
import ExplanationCard from "../components/ExplanationCard";
import { useChallenge } from "../hook/useChallenge";
import "../styles/Solution.css";

const Solution = () => {
  const { solutions ,error }= useChallenge();
  
  return (
    <div className="solution__container">
      <div className="solution__error">
        <p>{error}</p>
      </div>
      <div className="solution__develop">
        <div className="solution__develop--bucketX">
          <h5>Bucket X</h5>
        </div>
        <div className="solution__develop--bucketY">
          <h5>Bucket Y</h5>
        </div>
        <div className="solution__develop--explanation">
          <h5>Explanation</h5>
        </div>
      </div>
      {solutions?.map((solution, i) => {
        return <ExplanationCard solution={solution} key={i} />
      })}
    </div>
  ); 
}

export default Solution;