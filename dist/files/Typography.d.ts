import { GroupLike } from "./Pt";
/** Various functions to support typography */
export declare class Typography {
    /**
     * Create a heuristic text width estimate function. It will be less accurate but faster.
     * @param fn a reference function that can measure text width accurately
     * @param samples a list of string samples. Default is ["M", "n", "."]
     * @param distribution a list of the samples' probability distribution. Default is [0.06, 0.8, 0.14].
     * @return a function that can estimate text width
     */
    static textWidthEstimator(fn: (string) => number, samples?: string[], distribution?: number[]): (string) => number;
    /**
     * Truncate text to fit width
     * @param fn a function that can measure text width
     * @param str text to truncate
     * @param width width to fit
     * @param tail text to indicate overflow such as "...". Default is empty "".
     */
    static truncate(fn: (string) => number, str: string, width: number, tail?: string): [string, number];
    /**
     * Get a function to scale font size proportionally to text box size changes.
     * @param box Initial box as a Group
     * @param ratio font-size change ratio. Default is 1.
     * @returns a function where input parameter is a new box, and returns the new font size value
     */
    static fontSizeToBox(box: GroupLike, ratio?: number, byHeight?: boolean): (GroupLike) => number;
    /**
     * Get a function to scale font size based on a threshold value
     * @param defaultSize default font size to base on
     * @param threshold threshold value
     * @param direction if negative, get a font size <= defaultSize; if positive, get a font size >= defaultSize; Default is 0 which will scale font without min or max limits.
     * @returns a function where input parameter is the default font size and a value to compare with threshold, and returns new font size value
     */
    static fontSizeToThreshold(threshold: number, direction?: number): (a: number, b: number) => number;
}
