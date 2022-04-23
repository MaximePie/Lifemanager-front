import React from 'react';

type ShoppingListHeaderProps = {
  onUnCheckAll: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function ShoppingListHeader({ onUnCheckAll }: ShoppingListHeaderProps) {
  return (
    <div className="ShoppingListHeader">
      <h4>
        Shopping List
        <button
          className="ShoppingListHeader__uncheck-all"
          onClick={onUnCheckAll}
          type="button"
        >
          Décocher
        </button>
      </h4>
    </div>
  );
}
