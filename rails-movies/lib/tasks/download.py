from multiprocessing import Pool
import requests
import gzip
import shutil
import os


def download_file(url: str, filename: str) -> None:
    response = requests.get(url)
    with open(filename, 'wb') as file:
        file.write(response.content)


def extract_file(filename: str) -> None:
    with gzip.open(filename, 'rb') as f_in:
        with open(filename[:-3], 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)


def download_extract_file(url: str, filename: str) -> None:
    print(f"Downloading {filename}")
    download_file(url, filename)
    print(f"Extracting {filename}")
    extract_file(filename)
    print(f"Done {filename}")


def main() -> None:
    URL = "https://datasets.imdbws.com/"
    OUT_DIR = "../out/"

    datasets = [
        "name.basics.tsv.gz",
        "title.akas.tsv.gz",
        "title.basics.tsv.gz",
        "title.crew.tsv.gz",
        "title.episode.tsv.gz",
        "title.principals.tsv.gz",
        "title.ratings.tsv.gz"
    ]

    # filter out files that have already been downloaded
    datasets = list(
        filter(
            lambda d: not os.path.exists(f'{OUT_DIR}{d[:-3]}'),
            filter(
                lambda d: not os.path.exists(f'{OUT_DIR}{d}'),
                datasets
            )
        )
    )

    os.makedirs(OUT_DIR, exist_ok=True)

    print("Start:")
    if len(datasets) > 0:
        with Pool(len(datasets)) as pool:
            pool.starmap(
                download_extract_file,
                map(
                    lambda file: (f'{URL}{file}', f'{OUT_DIR}{file}'),
                    datasets
                )
            )
    print("Done.")


if __name__ == "__main__":
    main()
