import{ forwardRef} from 'react';

export const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input type="text" value={value}  onClick={onClick} onChange={onChange}  ref={ref} placeholder="From Date" className="form-control date-picker"></input>
));