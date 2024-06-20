import pandas as pd
import matplotlib.pyplot as plt


def pad_data(names, failure_names, failure_counts):
    data = []
    j = 0
    for i in range(len(names)):
        if names[i] in failure_names:
            data.append(failure_counts[j])
            j = j + 1
        else:
            data.append(0)
    return data


def main() -> None:
    # Load the CSV file
    df: pd.DataFrame = pd.read_csv(
        'jmeter/medium-test/results/medium_test.csv'
    )

    # number_of_users = ['5', '10', '20', '50', '100']
    number_of_users: dict[str, str] = {
        'A': '5', 'B': '10', 'C': '20', 'D': '80', 'E': '100', 'F': '200', 'G': '400'
    }

    name = 'threadName'
    latency = 'Latency'
    success = 'success'

    # Manipulate the 'threadName' column
    df[name] = df[name].str[18:19]

    # Select specific columns
    selected_columns = df[[name, latency, success]]

    # Group by 'threadName' and compute the average of the 'Latency' column for each group
    average_latency_by_name = selected_columns.groupby(
        name)[latency].mean().reset_index()

    # Count the number of failures for each thread
    failure_counts = selected_columns[selected_columns[success] == False].groupby(
        name)[success].count().reset_index()
    failure_counts.rename(columns={success: 'failure_count'}, inplace=True)

    # Print the average latency and failure counts for each thread
    print(average_latency_by_name)
    print(failure_counts)

    # Plot the results in a line graph for average latency
    plt.figure(figsize=(10, 6))
    plt.plot(
        list(number_of_users.values()),
        average_latency_by_name[latency],
        marker='o',
        label='Average Latency'
    )

    # Add title and labels
    plt.title('Average Latency by number of users')
    plt.xlabel('Number of users')
    plt.ylabel('Average Latency in ms')

    # Show grid
    plt.grid(True)
    plt.legend()

    # Show the plot
    plt.tight_layout()  # Adjust layout to make room for x-axis labels
    plt.savefig(
        'jmeter/medium-test/py_analyze/average_latency_by_number_of_users.svg')

    # Plot the results in a bar graph for failure counts
    plt.figure(figsize=(10, 6))

    list_failure = pad_data(
        list(number_of_users.keys()),
        list(
            failure_counts[name]
        ),
        list(failure_counts['failure_count'])
    )

    plt.bar(
        list(number_of_users.values()),
        # failure_counts['failure_count'],
        list_failure,
        color='red',
        label='Failure Count'
    )

    # Add title and labels
    plt.title('Failure Count by number of users')
    plt.xlabel('Number of users')
    plt.ylabel('Failure Count')

    # Show grid
    plt.grid(True)
    plt.legend()

    # Show the plot
    plt.tight_layout()  # Adjust layout to make room for x-axis labels
    plt.savefig(
        'jmeter/medium-test/py_analyze/failure_count_by_number_of_users.svg')
    plt.show()


if __name__ == "__main__":
    main()
