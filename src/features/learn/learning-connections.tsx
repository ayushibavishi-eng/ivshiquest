import type { LearningConnection } from "@/domain";
import { LearnSection } from "@/features/learn/learn-section";

type LearningConnectionsProps = {
  connections: LearningConnection[];
};

export function LearningConnections({
  connections,
}: LearningConnectionsProps) {
  return (
    <LearnSection
      headingId="connections-heading"
      title="Your learning is connecting"
      className="border-t border-line pt-8"
    >
      <ul className="flex flex-col gap-4">
        {connections.map((connection) => (
          <li key={connection.id}>
            <p className="sr-only">{connection.nodes.join(", then ")}</p>
            <ol
              aria-hidden="true"
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-ink"
            >
              {connection.nodes.map((node, index) => (
                <li key={node} className="inline-flex items-center gap-2">
                  <span className="font-medium">{node}</span>
                  {index < connection.nodes.length - 1 ? (
                    <span className="text-ink-muted">→</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </LearnSection>
  );
}
