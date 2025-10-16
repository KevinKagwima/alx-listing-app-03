import { ButtonProps } from "@/interfaces"
export default function Button({ text, text_color, bg_color }: ButtonProps) {
    return (
        <button
            style={{
                color: text_color,
                backgroundColor: bg_color
            }}
            className="px-5 py-3 rounded-full font-medium text-[17px] border
             border-gray-200 transition hover:shadow-md
             hover:border-gray-400">
            {text}
        </button>
    )
}