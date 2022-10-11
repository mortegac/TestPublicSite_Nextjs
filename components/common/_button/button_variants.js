const variants = {
    'default': {
        name:'default',
        bgColor:'var(--Bg-gray)', 
        textColor:'black',
        borderColor:'--Bg-gray',
        bgHover:'var(--Ria-orange)',
        bgHoverText:'white', 
    },
    'solid-orange': {
        name:'primary',
        bgColor:'var(--Ria-orange)', 
        textColor:'white', 
        borderColor:'var(--Ria-orange)',
        bgHover:'#ff7733',
        bgHoverText:'white', 
    },
    'solid-green': {
        name:'solid-green',
        bgColor:'rgba(34, 204, 102, 0.15)', 
        textColor:'rgba(8, 135, 62, 1)', 
        borderColor:'rgba(34, 204, 102, 0.15)',
        bgHover:'rgba(34, 204, 102, 0.15)',
        bgHoverText:'rgba(8, 135, 62, 1)', 
    },
    'only-text': {
        name:'only-text',
        bgColor:'transparent', 
        textColor:'var(--Text-primary)', 
        borderColor:'transparent',
        bgHover:'transparent',
        bgHoverText:'var(--Text-primary)', 
    },
    'secondary': {
        name:'secondary',
        bgColor:'var(--Ria-orange)', 
        textColor:'white',
        borderColor:'var(--Ria-orange)',
        bgHover:'white',
        bgHoverText:'var(--Ria-orange)', 
    },
    'outline-orange': {
        name:'outline',
        bgColor:'transparent', 
        textColor:'var(--Ria-orange)',
        borderColor:'var(--Ria-orange)',
        bgHover:'var(--Ria-orange)',
        bgHoverText:'white', 
    },
    'outline-white': {
        name:'outline',
        bgColor:'transparent', 
        textColor:'white',
        borderColor:'white',
        bgHover:'transparent',
        bgHoverText:'white', 
    },
    'calculator-orange': {
        name:'primary',
        bgColor:'var(--Ria-orange)', 
        textColor:'white', 
        borderColor:'var(--Ria-orange)',
        borderRadius: '24px',
        padding: '12px 24px',
        bgHover:'#ff7733',
        bgHoverText:'white', 
        height: '48px'
    }
};

export default variants;
