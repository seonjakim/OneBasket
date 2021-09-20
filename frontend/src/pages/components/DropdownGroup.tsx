import React from 'react';
import { Flex, Dropdown, Button } from 'gestalt';

const DropdownGroup = ({ selected, onSelect, text, items }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  return (
    <div>
      <Flex>
        <Button
          accessibilityControls="action-variant-dropdown-example"
          accessibilityExpanded={open}
          accessibilityHaspopup
          iconEnd="arrow-down"
          onClick={() => setOpen((prevVal) => !prevVal)}
          ref={anchorRef}
          selected={open}
          size="md"
          text={selected ? selected.label : text}
        />
        {open && (
          <Dropdown
            anchor={anchorRef.current}
            id="action-variant-dropdown-example"
            onDismiss={() => setOpen(false)}
          >
            {items.map((el) => (
              <Dropdown.Item
                key={el.value}
                onSelect={onSelect}
                option={el}
                selected={selected}
              />
            ))}
          </Dropdown>
        )}
      </Flex>
    </div>
  );
};

export default DropdownGroup;
