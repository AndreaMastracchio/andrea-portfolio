/* Core */
import React from 'react'
import {CodeBlock, dracula} from "react-code-blocks";

const CodeView = (text: string, language: string, paragraph: string) => {
    return (
        <>
            <div className="text-start pt-4 text-textLightGray md:hidden">
                {paragraph}
            </div>
            <CodeBlock
                className="whitespace-pre text-sm "
                text={text}
                language={language}
                showLineNumbers={true}
                theme={dracula}
            />
        </>
    )
}

export default CodeView