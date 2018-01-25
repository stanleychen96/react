/**
 * 2017-1-10 StanleyChen
 */

import React from 'react';
import SimpleMDE from 'simplemde'
import marked from 'marked';
import highlight from 'highlight.js';
import styles from './index.less';
import { Button } from 'antd';

class Article extends React.Component {
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

  handleSubmit = () => {
    this.props.dispatch({
      type: 'addarticle/writeNewArticle',
      payload: {
        data: {
          titleInput: document.getElementById('title').value,
          labelInput: document.getElementById('label').value,
          contentInput: this.smde.value(),
        },
      },
    })
  }

  render() {
    return(
      <div>
        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            placeholder="标题"
            ref={(input) => {this.input = input}}
            id="title"
          />
        </div>

        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            placeholder="文章标签"
            id="label"
          />
        </div>

        <div>
          <textarea
            id="editor"
            placeholder="在此处写文章！"
          />
        </div>
        <div>
          <Button
            type="primary"
            size="small"
            className={styles.button}
            onClick={this.handleSubmit}
          >发布</Button>
        </div>
      </div>
    )
  }
}

export default Article;
