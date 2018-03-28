/**
 * The purpose of this file is to declare the *.vue files to Vue
 * so that when a file imports the .vue file the Editor knows that its a Vue module
 */
declare module "*.vue" {
    import Vue from "vue"
    export default Vue
}