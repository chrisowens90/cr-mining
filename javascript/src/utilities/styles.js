export const ScrollPretty = {
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em',
            height: 6,
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
            padding: '3px 2px',
            border: '1px solid rgba(0,0,0,0.075)',
            borderRadius: 6,
            backgroundColor: 'rgba(0,0,0,0.05)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.25)',
            border: 'none',
            borderRadius: 6,
        }
    }
}


export const Wrapper = {
    'wrapper': {
        height: 400,
        overflowY: 'auto',
        padding: 8,
        border: '1px solid #EEE',
        borderRadius: 4,
        margin: 24,
    }
}