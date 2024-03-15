'use client'
export const SimpleBtn = (props) => {


    const w  = props.w;
    const h = props.h;
    const SimpleBtnStyle = {
        width: w + 'px',
        height: h + 'px',
        background: "#000",
        padding: "4px 16px",
        borderRadius: "4px",
        color: "white",
        border: "solid 2px black",
    }


    return (
        <button style={SimpleBtnStyle} className="hover:bg-white hover:text-black disabled:opacity-30 disabled:hover:bg-black disabled:text-white disabled:hover:cursor-not-allowed" onClick={props.onClick} disabled={props.inActive}>
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
        background: "#000",
        padding: "4px 16px",
        borderRadius: "100px",
        color: "white",
        border: "solid 2px black",
    }


    return (
        <button style={BtnStyle} className="hover:opacity-80 disabled:opacity-30 disabled:hover:cursor-not-allowed" onClick={props.onClick} disabled={props.inActive}>
            {props.text}
        </button>
    )
}