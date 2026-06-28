/**
 * Registers middleware for handling inline_query actions with regular expressions.
 *
 * @see https://grammy.dev/guide/inline-queries#inline-queries
 */
export declare const InlineQuery: (search?: import("grammy").FilterQuery | import("../..").StringOrRegexQuery) => MethodDecorator;
