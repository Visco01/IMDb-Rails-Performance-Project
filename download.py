import requests
import gzip
import shutil
import os
from multiprocessing import Pool


def download_file(url: str, filename: str) -> None:
    response = requests.get(url)
    with open(filename, 'wb') as file:
        file.write(response.content)


def extract_file(filename: str) -> None:
    with gzip.open(filename, 'rb') as f_in:
        with open(filename[:-3], 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)


def main() -> None:
    URL = "https://datasets.imdbws.com/"
    BASICS = "title.basics.tsv.gz"
    RATINGS = "title.ratings.tsv.gz"
    OUT_DIR = "out/"

    os.makedirs(OUT_DIR, exist_ok=True)

    with Pool(2) as pool:
        pool.starmap(
            download_file,
            [
                (f'{URL}{BASICS}', f'{OUT_DIR}{BASICS}'),
                (f'{URL}{RATINGS}', f'{OUT_DIR}{RATINGS}')
            ]
        )
        print("Files downloaded")
        pool.map(extract_file, [f'{OUT_DIR}{BASICS}', f'{OUT_DIR}{RATINGS}'])
        print("Files extracted")
    print("Done.")


if __name__ == "__main__":
    main()
