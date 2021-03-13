import {Stats} from "fs";

export {}

// import fs from "fs/promises"
import {promises as fs} from "fs";
import path from "path"

const check_path = async (check_path: string): Promise<boolean> => {
    try {
        const stat: Stats = await fs.stat(check_path)
        return true
    } catch (err) {
        err.code == 'ENOENT' ? console.log("path does not exist") : console.log(`ERROR CODE: ${err.code}`)
        return false
    }
}

const certify_dir = async (
    last_path: string,
    target_path_split: Array<string>,
    progress: number,
    not_exist_yet: boolean
): Promise<boolean> => {

    let present_path: string = path.join(last_path, target_path_split[progress++])

    try {

        if (not_exist_yet) {
            if (not_exist_yet = await check_path(present_path)) return false
        }
        await fs.mkdir(present_path)

    } catch (err) {
        console.error(err)
    } finally {
        return (target_path_split.length > progress) ? await certify_dir(present_path, target_path_split, progress, not_exist_yet) : true
    }
}

const path_validation = async (target_path: string): Promise<boolean> => {

    const target_path_list: Array<string> = path
        .relative('.', path.normalize(target_path))
        .split(path.sep)
        .filter(p => !!p)

    return await certify_dir('.', target_path_list, 0, true)

}

export {check_path, path_validation}