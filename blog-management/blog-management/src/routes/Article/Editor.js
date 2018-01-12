/**
 * 2017-1-09 Stanley Chen
 */

import React from 'react';
import SimpleMDE from 'simplemde'
import marked from 'marked';
import highlight from 'highlight.js';
import styles from './Edtor.less';
import '../../../node_modules/highlight.js/styles/atom-one-dark.css';

class Editor extends React.Component {
  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor').childElementCount,  
      // autofocus: true,
      autosave: true,
      previewRender: function(plainText) {
        return marked(plainText,{
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return highlight.highlightAuto(code).value;
          }
        });
      },
    })
    this.input.focus();
  }

  render() {
    return(
      <div>
        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            placeholder="标题"
            ref={(input) => {this.input = input}}
          />
        </div>
        <div>
          <textarea
            id="editor"
            placeholder="在此处写文章！"
          />
        </div>
      </div>
    )
  }
}

export default Editor;
