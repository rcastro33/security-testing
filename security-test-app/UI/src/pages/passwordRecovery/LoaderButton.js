import React from "react";
import { Button } from "react-bootstrap";
import {Spinner} from 'react-bootstrap';
import "./LoaderButton.styles.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
    {isLoading && <Spinner />}
      {props.children}
    </Button>
  );
}