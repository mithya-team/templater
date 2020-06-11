import React from 'react'

type ToolbarOption = 'size' | 'color' | 'image' | 'align'
interface QuillToolbarProps {
    id: string
    toolbarOptions?: ToolbarOption[]
}

const QuillToolbar: React.FC<QuillToolbarProps> = (props) => {
    const { toolbarOptions = ['align', 'color', 'image', 'size'] } = props;


    return (
        <div id={props.id}>
            {toolbarOptions.includes('size') && Size}
            <span className="ql-formats">
                {Formatting}
                {toolbarOptions.includes('color') && Color}
            </span>
            {toolbarOptions.includes('image') && Image}
            {toolbarOptions.includes('align') && Align}
            {Indents}
        </div>
    )
}

const Image = (
    <button className="ql-image"></button>
)

// const Color = (
//     <select className="ql-color">
//     </select>
// )

const Color = (
    <input id="color" type="color" className="ql-color" />
)


const Size = (
    <select className="ql-size">
        <option value="12px">Small</option>
        <option selected value="14px">Medium</option>
        <option value="18px">Large</option>
    </select>
)

const Indents = (
    <span className="ql-formats">
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-indent" value="-1"></button>
        <button className="ql-indent" value="+1"></button>
    </span>
)
const Formatting = (
    <>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-link"></button>
    </>
)

const Align = (
    <span className="ql-formats">
        <button className="ql-direction" value="rtl"></button>
        <select className="ql-align"></select>
    </span>
)


export default QuillToolbar