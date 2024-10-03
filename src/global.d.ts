declare namespace JSX {
    interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            src: string;
            'seamless-poster'?: boolean;
            'environment-image'?: string;
            'shadow-intensity'?: string;
            autoplay?: boolean;
            ar?: boolean;
            'ar-modes'?: string;
            'camera-controls'?: boolean;
            'touch-action'?: string;
            'auto-rotate'?: boolean;
            'interaction-prompt-threshold'?: string;
            'enable-pan'?: boolean;
            'min-field-of-view'?: string;
            'disable-zoom'?: boolean;
            loading?: string;
        };
    }
}
