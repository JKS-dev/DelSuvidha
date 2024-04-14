'use client'
export const SimpleBtn = (props) => {


    const w  = props.w;
    const h = props.h;
    const SimpleBtnStyle = {
        width: w + 'px',
        height: h + 'px',
        background: "#0C2D57",
        padding: "4px 16px",
        borderRadius: "4px",
        color: "white",
        border: "solid 2px #0C2D57",
    }


    return (
        <button style={SimpleBtnStyle} className="hover:bg-current hover:text-blue disabled:opacity-30 disabled:hover:bg-black disabled:text-white disabled:hover:cursor-not-allowed" onClick={props.onClick} disabled={props.inActive}>
            {props.text}
        </button>
    )
}
export const Btn = (props) => {


    const w  = props.w;
    const h = props.h;
    const SimpleBtnStyle = {
        width: w + 'px',
        height: h + 'px',
        background: "white",
        padding: "4px 16px",
        borderRadius: "4px",
        color: "#FC6736",
        border: "solid 2px #FC6736",
    }


    return (
        <button style={SimpleBtnStyle} className="hover:bg-orange hover:text-current disabled:opacity-30 disabled:hover:bg-black disabled:text-white disabled:hover:cursor-not-allowed" onClick={props.onClick} disabled={props.inActive}>
            {props.text}
        </button>
    )
}

export const GrayBtn = (props) => {


    const w  = props.w;
    const h = props.h;
    const SimpleBtnStyle = {
        width: w + 'px',
        height: h + 'px',
        background: "white",
        padding: "4px 16px",
        borderRadius: "4px",
        color: "black",
        border: "solid 2px tansparent",
    }


    return (
        <button style={SimpleBtnStyle} className="hover:bg-gray hover:text-blue disabled:opacity-30 disabled:hover:bg-black disabled:text-white disabled:hover:cursor-not-allowed" onClick={props.onClick} disabled={props.inActive}>
            {props.text}
        </button>
    )
}
export const RoundedBtn = (props) => {


    const w  = props.w;
    const h = props.h;
    const BtnStyle = {
        width: w + 'px',
        height: h + 'px',
        background: "#FC6736",
        padding: "4px 16px",
        borderRadius: "100px",
        color: "white",
        border: "solid 2px #FC6736",
    }


    return (
        <button style={BtnStyle} className="hover:opacity-80 disabled:opacity-30 disabled:hover:cursor-not-allowed" onClick={props.onClick} disabled={props.inActive}>
            {props.text}
        </button>
    )
}