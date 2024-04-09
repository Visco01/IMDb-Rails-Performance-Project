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
    OUT_DIR = "out/"

    datasets = [
        "title.basics.tsv.gz",
        "title.ratings.tsv.gz"
    ]

    os.makedirs(OUT_DIR, exist_ok=True)
    
    print("Start")
    with Pool(len(datasets)) as pool:
        pool.starmap(
            download_file,
            map(lambda file: (f'{URL}{file}', f'{OUT_DIR}{file}'), datasets)
        )
        pool.map(extract_file, map(lambda file: f'{OUT_DIR}{file}', datasets))
    print("Done.")


if __name__ == "__main__":
    main()
