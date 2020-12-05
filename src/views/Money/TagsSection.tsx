import styled from 'styled-components'
import React, { useState } from 'react'

const _TagsSection = styled.section`
    background:#ffffff;
    padding:12px 16px;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start;
    > ol {
        margin:0 -12px;
        > li {
            background:#D9D9D9;
            border-radius:18px;
            display:inline-block;
            padding:3px 18px;
            font-size:14px;
            margin:8px 12px;
        }
    }
    > button{
        background:none;
        border:none;
        padding:2px 4px;
        border-bottom:1px solid #333;
        color:#666;
        margin-top:8px;
    }
`

const TagsSection: React.FunctionComponent = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    const addTagName = () => {
        const tagName = window.prompt("请输入标签名")
        if (tagName){
            setTags([...tags,tagName])
        }
    }
    return (
        <_TagsSection>
            <ol>
                {tags.map(tag =>
                    <li key={tag}>{tag}</li>
                )}
            </ol>
            <button onClick={addTagName}>新增标签</button>
        </_TagsSection>
    )
}

export { TagsSection }