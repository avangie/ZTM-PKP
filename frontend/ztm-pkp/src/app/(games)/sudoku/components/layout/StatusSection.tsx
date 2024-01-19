import React from "react";
import { Numbers } from "../Numbers";
import { Action } from "../Action";

type StatusSectionProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickNumber: (number: string) => void;
  onClickUndo: () => void;
  onClickErase: () => void;
  onClickHint: () => void;
  onClickMistakesMode: () => void;
  onClickFastMode: () => void;
};

/**
 * React component for the Status Section.
 */
export const StatusSection = (props: StatusSectionProps) => {
  return (
    <section className="status">
      <Numbers onClickNumber={(number) => props.onClickNumber(number)} />
      <div className="status__actions">
        <Action action="undo" onClickAction={props.onClickUndo} />
        <Action action="erase" onClickAction={props.onClickErase} />
        <Action action="hint" onClickAction={props.onClickHint} />
      </div>
    </section>
  );
};
