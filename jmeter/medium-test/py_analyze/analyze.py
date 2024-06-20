import pandas as pd
import matplotlib.pyplot as plt


def main() -> None:
    # Load the CSV file
    df: pd.DataFrame = pd.read_csv(
        'jmeter/medium-test/results/medium_test.csv')

    name = 'threadName'
    latency = 'Latency'

    # Manipulate the 'threadName' column
    df[name] = df[name].str[18:19]

    # Select specific columns
    selected_columns = df[[name, latency]]

    # Group by 'threadName' and compute the average of the 'Latency' column for each group
    average_latency_by_name = selected_columns.groupby(
        name)[latency].mean().reset_index()

    print(average_latency_by_name)

    # Plot the results in a line graph
    plt.figure(figsize=(10, 6))
    plt.plot(
        ['5', '10', '20', '50', '100'],
        average_latency_by_name[latency],
        marker='o'
    )

    # Add title and labels
    plt.title('Average Latency by Number of users')
    plt.xlabel('Number of users')
    plt.ylabel('Average Latency in ms')
    # Rotate x-axis labels if necessary for better readability
    # plt.xticks(rotation=45)

    # Show grid
    plt.grid(True)

    # Save the plot as an image file
    plt.tight_layout()  # Adjust layout to make room for x-axis labels
    plt.savefig('jmeter/medium-test/py_analyze/average_latency_by_name.svg')
    plt.show()


if __name__ == "__main__":
    main()
