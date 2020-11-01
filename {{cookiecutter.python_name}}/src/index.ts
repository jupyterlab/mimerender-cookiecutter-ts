import { IRenderMime } from '@jupyterlab/rendermime-interfaces';

{% if cookiecutter.data_format == 'json' %}
import { JSONObject } from '@lumino/coreutils';
{% endif %}

import { Widget } from '@lumino/widgets';

/**
 * The default mime type for the extension.
 */
const MIME_TYPE = '{{cookiecutter.mimetype}}';

/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-{{cookiecutter.mimetype_name}}';

/**
 * A widget for rendering {{cookiecutter.mimetype_name}}.
 */
export class OutputWidget extends Widget implements IRenderMime.IRenderer {
  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render {{cookiecutter.mimetype_name}} into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    {% if cookiecutter.data_format == 'json' %}
    let data = model.data[this._mimeType] as JSONObject;
    this.node.textContent = JSON.stringify(data);
    {% else %}
    let data = model.data[this._mimeType] as string;
    this.node.textContent = data.slice(0, 16384);
    {% endif %}
    return Promise.resolve();
  }

  private _mimeType: string;
}

/**
 * A mime renderer factory for {{cookiecutter.mimetype_name}} data.
 */
export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};

/**
 * Extension definition.
 */
const extension: IRenderMime.IExtension = {
  id: '{{cookiecutter.labextension_name}}:plugin',
  rendererFactory,
  rank: 0,
  dataType: '{{ cookiecutter.data_format }}',
  fileTypes: [
    {
      name: '{{cookiecutter.mimetype_name}}',
      mimeTypes: [MIME_TYPE],
      extensions: ['{{cookiecutter.file_extension}}']
    }
  ],
  documentWidgetFactoryOptions: {
    name: '{{ cookiecutter.viewer_name }}',
    primaryFileType: '{{cookiecutter.mimetype_name}}',
    fileTypes: ['{{cookiecutter.mimetype_name}}'],
    defaultFor: ['{{cookiecutter.mimetype_name}}']
  }
};

export default extension;
