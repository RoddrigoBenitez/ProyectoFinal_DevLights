interface buttonsProps {
    type: 'confirm' | 'cancel',
    text: string 
}

export default function Button({type , text}: buttonsProps) {
    return(
        <button key={type}>
            {text}
        </button>
    )
}