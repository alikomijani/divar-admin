import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "@mui/material/utils";

type Props<T extends { id: string }> = {
  name: string;
  defaultValue?: T[];
  isLoading: boolean;
  options: T[];
  groupBy?: (option: T) => string;
  getOptionLabel: (option: T) => string;
  label: string;
  setQuery: (q: string) => void;
};

export default function MultiAsyncListField<T extends { id: string }>({
  name,
  defaultValue,
  isLoading,
  options = [],
  groupBy,
  getOptionLabel,
  label,
  setQuery,
}: Props<T>) {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState<T[]>([]);
  useEffect(() => {
    if (defaultValue) {
      setValues(defaultValue);
    }
  }, [defaultValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateQuery = useCallback(
    debounce((inputValue: string) => setQuery(inputValue), 500),
    []
  );

  return (
    <>
      {values?.map((v, index) => (
        <input
          key={v.id}
          defaultValue={v.id}
          name={`${name}.${index}`} // This will be sent to the backend
          type="hidden"
        />
      ))}
      <Autocomplete
        disablePortal
        fullWidth
        multiple
        getOptionLabel={getOptionLabel}
        groupBy={groupBy}
        inputValue={inputValue}
        options={options}
        value={values}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              },
            }}
          />
        )}
        onChange={(event: unknown, newValue: T[] | undefined) => {
          setValues(newValue ?? []);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          updateQuery(newInputValue);
        }}
      />
    </>
  );
}
