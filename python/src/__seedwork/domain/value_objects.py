# Utils
from abc import ABC
import uuid
from dataclasses import dataclass, field, fields
from __seedwork.domain.exceptions import InvalidUUidException


@dataclass(kw_only=True, frozen=True)
class ValueObject(ABC):
    def __str__(self) -> str:
        return super().__str__()


@dataclass(kw_only=True, frozen=True)
class UniqueEntityId(ValueObject):
    id: str = field(
        default_factory=lambda: str(uuid.uuid4())
    )

    def __post_init__(self):
        id = str(self.id) if isinstance(
            self.id, uuid.UUID) else self.id
        object.__setattr__(self, "id", id)
        self.__validate()

    def __validate(self):
        try:
            uuid.UUID(self.id)
        except ValueError as ex:
            raise InvalidUUidException from ex

    def __str__(self) -> str:
        return f"{self.id}"
